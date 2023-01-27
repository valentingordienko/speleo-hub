import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ComponentTemplateOutline.svg';

export function ComponentTemplateOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ComponentTemplateOutline">
      <SVG />
    </Icon>
  );
}
