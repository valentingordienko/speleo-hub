import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ThumbsDownOutline.svg';

export function ThumbsDownOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ThumbsDownOutline">
      <SVG />
    </Icon>
  );
}
