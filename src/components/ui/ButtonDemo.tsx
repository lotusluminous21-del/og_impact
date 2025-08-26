import React from 'react';
import { AutomatixButton } from './AutomatixButton';

export const ButtonDemo: React.FC = () => {
    return (
        <div className="p-8 space-y-8">
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">AutomatixButton Variants</h2>
                <p className="text-gray-600 dark:text-neutral-400 mb-8">
                    Testing different button styles and variants
                </p>
            </div>

            {/* Primary Variants */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold">Primary Variants</h3>
                <div className="flex flex-wrap gap-4">
                    <AutomatixButton variant="primary" size="sm">
                        Small Primary
                    </AutomatixButton>
                    <AutomatixButton variant="primary" size="md">
                        Medium Primary
                    </AutomatixButton>
                    <AutomatixButton variant="primary" size="lg" showArrow={true}>
                        Large Primary with Arrow
                    </AutomatixButton>
                    <AutomatixButton variant="primary" size="xl">
                        Extra Large Primary
                    </AutomatixButton>
                </div>
            </div>

            {/* Secondary Variants */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold">Secondary Variants</h3>
                <div className="flex flex-wrap gap-4">
                    <AutomatixButton variant="secondary" size="sm">
                        Small Secondary
                    </AutomatixButton>
                    <AutomatixButton variant="secondary" size="md" showArrow={true}>
                        Medium Secondary with Arrow
                    </AutomatixButton>
                    <AutomatixButton variant="secondary" size="lg">
                        Large Secondary
                    </AutomatixButton>
                </div>
            </div>

            {/* Outline Variants */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold">Outline Variants</h3>
                <div className="flex flex-wrap gap-4">
                    <AutomatixButton variant="outline" size="sm">
                        Small Outline
                    </AutomatixButton>
                    <AutomatixButton variant="outline" size="md" showArrow={true}>
                        Medium Outline with Arrow
                    </AutomatixButton>
                    <AutomatixButton variant="outline" size="lg">
                        Large Outline
                    </AutomatixButton>
                </div>
            </div>

            {/* Ghost Variants */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold">Ghost Variants</h3>
                <div className="flex flex-wrap gap-4">
                    <AutomatixButton variant="ghost" size="sm">
                        Small Ghost
                    </AutomatixButton>
                    <AutomatixButton variant="ghost" size="md" showArrow={true}>
                        Medium Ghost with Arrow
                    </AutomatixButton>
                    <AutomatixButton variant="ghost" size="lg">
                        Large Ghost
                    </AutomatixButton>
                </div>
            </div>

            {/* Responsive Test */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold">Responsive Test</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                    <AutomatixButton variant="primary" size="lg" showArrow={true} className="w-full sm:w-auto">
                        Responsive Button
                    </AutomatixButton>
                    <AutomatixButton variant="outline" size="lg" className="w-full sm:w-auto">
                        Another Responsive
                    </AutomatixButton>
                </div>
            </div>
        </div>
    );
};
